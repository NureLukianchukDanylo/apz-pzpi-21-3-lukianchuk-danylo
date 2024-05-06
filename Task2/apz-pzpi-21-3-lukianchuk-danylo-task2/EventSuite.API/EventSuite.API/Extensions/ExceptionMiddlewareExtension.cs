using AutoMapper;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Serilog;
using EventSuite.Core.DTOs.Responses.Exception;
using System.Net;
using System.Reflection;
using System.Security.Authentication;
using EventSuite.Core.Extra;

namespace EventSuite.API.Extensions
{
    public static class ExceptionMiddlewareExtension
    {
        private static readonly Serilog.ILogger Logger = Log.ForContext(MethodBase.GetCurrentMethod()?.DeclaringType);

        // Method for configuring exception handler and process exception
        public static void ConfigureExceptionHandler(this IApplicationBuilder app)
        {
            app.UseExceptionHandler(
                appError =>
                {
                    appError.Run(async context =>
                    {
                        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();

                        if (contextFeature != null)
                        {
                            Logger.Error(contextFeature.Error, "Error during executing {Context}", context.Request.Path.Value);
                            context.Response.ContentType = "application/json";

                            var status = GetResponse(contextFeature.Error);
                            await context.Response.WriteAsync(
                                new ExceptionResponse()
                                {
                                    StatusCode = (int)status,
                                    Message = contextFeature.Error.InnerException == null ? contextFeature.Error.Message : contextFeature.Error.InnerException.Message
                                }.ToString());
                        }
                    });
                });
        }

        // Method for getting response status code
        public static HttpStatusCode GetResponse(Exception exception)
        {
            Exception exception1 = exception.InnerException ?? exception;
            var code = exception1 switch
            {
                KeyNotFoundException
                                    or FileNotFoundException => HttpStatusCode.NotFound,
                UnauthorizedAccessException
                                    or AuthenticationException => HttpStatusCode.Unauthorized,
                ArgumentNullException
                                    or NullReferenceException
                                    or SmartBraceletException
                                    or ArgumentException
                                    or InvalidOperationException
                                    or DbUpdateException
                                    or AutoMapperMappingException => HttpStatusCode.BadRequest,
                _ => HttpStatusCode.InternalServerError,
            };
            return code;
        }
    }
}
