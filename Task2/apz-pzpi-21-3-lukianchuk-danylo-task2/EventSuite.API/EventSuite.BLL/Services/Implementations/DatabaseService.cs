using Microsoft.Extensions.Configuration;
using EventSuite.DAL.Repositories.Interfaces;
using EventSuite.BLL.Services.Interfaces;

namespace EventSuite.BLL.Services.Implementations
{
    public class DatabaseService : IDatabaseService
    {
        public readonly IConfiguration _configuration;
        public readonly IUnitOfWork _unitOfWork;
        public DatabaseService(IConfiguration configuration, IUnitOfWork unitOfWork) 
        {
            this._configuration = configuration;
            this._unitOfWork = unitOfWork;
        }
        public async Task CreateBackupAsync()
        {
            var directory = _configuration.GetSection("Backup")["BackupPath"];
            var database = _configuration.GetSection("ConnectionStrings")["DefaultConnection"]?.Split(";")[1].Split("=")[1];
            if (database == null)
                throw new ArgumentNullException("Database name is not provided in the connection string");
            var filename = $"EventSuite_backup_{DateTime.Now:yyyyMMddHHmmss}.bak";

            var backupPath = Path.Combine(directory, filename);
            if (!Directory.Exists(directory))
                Directory.CreateDirectory(directory);

            await _unitOfWork.CreateDatabaseBackupAsync(backupPath, database);
        }
    }
}
