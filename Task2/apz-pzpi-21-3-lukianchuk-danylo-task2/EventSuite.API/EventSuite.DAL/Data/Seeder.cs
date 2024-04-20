using Bogus;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EventSuite.Core.Models;
using EventSuite.DAL.Repositories.Interfaces;
using EventSuite.Core.Enums;

namespace EventSuite.DAL.Data
{
    public class Seeder : ISeeder
    {
        public readonly ApplicationDbContext _context;
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public Seeder(ApplicationDbContext context,
            IUnitOfWork unitOfWork,
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task EnsureSeedDataAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();

            var aspNetCoreIdentityDbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            await aspNetCoreIdentityDbContext.Database.MigrateAsync();
            await SeedUsersAndRolesAsync(serviceProvider);
            await SeedDataAsync(serviceProvider);
        }

        private async Task SeedUsersAndRolesAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();

            var countUsers = _userManager.Users.Count();

            if (countUsers == 0)
            {
                List<string> userNames = new() { "user@gmail.com", "organizator@gmail.com", "admin@gmail.com" };

                foreach (var username in userNames)
                {
                    if (await _roleManager.FindByNameAsync("User") == null)
                        await _roleManager.CreateAsync(new IdentityRole("User"));
                    
                    if (await _roleManager.FindByNameAsync("Organizator") == null)
                        await _roleManager.CreateAsync(new IdentityRole("Organizator"));
                    
                    if (await _roleManager.FindByNameAsync("Admin") == null)
                        await _roleManager.CreateAsync(new IdentityRole("Admin"));

                    var user = await _userManager.FindByNameAsync(username);

                    if (user != null)
                    {
                        continue;
                    }

                    user = new Faker<User>()
                        .RuleFor(u => u.UserName, username)
                        .RuleFor(u => u.FirstName, f => f.Person.FirstName)
                        .RuleFor(u => u.LastName, f => f.Person.LastName)
                        .RuleFor(u => u.CompanyName, f => f.Company.CompanyName())
                        .RuleFor(u => u.Email, username)
                        .RuleFor(u => u.EmailConfirmed, true).Generate();
                    var result = await _userManager.CreateAsync(user, "Pass123$");

                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }

                    if (user.Email.Contains("user"))
                        result = await _userManager.AddToRoleAsync(user, "User");
                    else if (user.Email.Contains("organizator"))
                        result = await _userManager.AddToRoleAsync(user, "Organizator");
                    else
                        result = await _userManager.AddToRoleAsync(user, "Admin");

                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }
                }
            }
        }

        private async Task SeedDataAsync(IServiceProvider serviceProvider)
        {
            var userId = _userManager.Users.First().Id;
            var locations = await _unitOfWork.Locations.GetAllAsync();
            if (!locations.Any())
            {
                locations = new Faker<Location>()
                    .RuleFor(l => l.Country, f => f.Address.Country())
                    .RuleFor(l => l.City, f => f.Address.City())
                    .RuleFor(l => l.Street, f => f.Address.StreetName())
                    .RuleFor(l => l.StreetType, "Street")
                    .RuleFor(l => l.BuildingNumber, f => f.Random.Int(1, 10).ToString())
                    .Generate(5).ToList();

                await _unitOfWork.Locations.AddManyAsync(locations);
                await _context.SaveChangesAsync();
            }

            var events = await _unitOfWork.Events.GetAllAsync();
            if (!events.Any())
            {
                events = new Faker<Event>()
                    .RuleFor(p => p.Name, f => f.Company.CompanyName())
                    .RuleFor(p => p.Description, f => f.Lorem.Text())
                    .RuleFor(p => p.Size, f => f.Random.Int(100, 5000))
                    .RuleFor(p => p.StartDate, f => f.Date.Past())
                    .RuleFor(p => p.EndDate, f => f.Date.Future())
                    .RuleFor(p => p.UserId, userId)
                    .Generate(5).ToList();

                await _unitOfWork.Events.AddManyAsync(events);
                await _context.SaveChangesAsync();
            }
            var malls = await _unitOfWork.Malls.GetAllAsync();
            if (!malls.Any())
            {
                malls = new Faker<Mall>()
                    .RuleFor(i => i.Name, f => f.Company.CompanyName())
                    .RuleFor(i => i.Square, f => f.Random.Double(10, 10000))
                    .RuleFor(i => i.LocationId, locations.FirstOrDefault()?.Id)
                    .Generate(5).ToList();
                await _unitOfWork.Malls.AddManyAsync(malls);
                await _context.SaveChangesAsync();
            }
            var resources = await _unitOfWork.Resources.GetAllAsync();
            if (!resources.Any())
            {
                resources = new Faker<Resource>()
                    .RuleFor(i => i.Name, f => f.Commerce.ProductName())
                    .RuleFor(i => i.Description, f => f.Commerce.ProductDescription())
                    .RuleFor(i => i.Price, f => f.Random.Decimal(10, 1000))
                    .RuleFor(i => i.Type, ResourceType.Equipment)
                    .Generate(5).ToList();
                await _unitOfWork.Resources.AddManyAsync(resources);
                await _context.SaveChangesAsync();
            }
            var registrations = await _unitOfWork.Registrations.GetAllAsync();
            if (!registrations.Any())
            {
                registrations = new Faker<Registration>()
                    .RuleFor(a => a.EventId, events.FirstOrDefault()?.Id)
                    .RuleFor(a => a.UserId, userId)
                    .Generate(5).ToList();
                await _unitOfWork.Registrations.AddManyAsync(registrations);
                await _context.SaveChangesAsync();
            }
            var tickets = await _unitOfWork.Tickets.GetAllAsync();
            if (!tickets.Any())
            {
                tickets = new Faker<Ticket>()
                    .RuleFor(q => q.Price, f => f.Random.Decimal(100, 3000))
                    .RuleFor(i => i.Type, TicketType.Regular)
                    .RuleFor(q => q.RegistrationId, registrations.FirstOrDefault()?.Id)
                    .Generate(5).ToList();
                await _unitOfWork.Tickets.AddManyAsync(tickets);
                await _context.SaveChangesAsync();
            }
            var venues = await _unitOfWork.Venues.GetAllAsync();
            if (!venues.Any())
            {
                venues = new Faker<Venue>()
                    .RuleFor(a => a.Type, VenueType.OpenSpace)
                    .RuleFor(p => p.Description, f => f.Lorem.Text())
                    .RuleFor(p => p.Square, f => f.Random.Double(5, 300))
                    .RuleFor(a => a.MaxSize, f => f.Random.Int(10, 5000))
                    .RuleFor(a => a.Services, f => f.Lorem.Text())
                    .RuleFor(a => a.RoomNumber, f => f.Random.Int(1, 500).ToString())
                    .RuleFor(a => a.Floor, f => f.Random.Int(1, 10))
                    .RuleFor(a => a.MallId, malls.FirstOrDefault()?.Id)
                    .Generate(5).ToList();
                await _unitOfWork.Venues.AddManyAsync(venues);
                await _context.SaveChangesAsync();
            }
            /*var camapaignAdvertisements = await _unitOfWork.CampaignAdvertisements.GetAllAsync();
            if (!camapaignAdvertisements.Any())
            {
                var adCampaignId = (await _unitOfWork.AdCampaigns.GetAllAsync()).First().Id;
                var advertisementId = (await _unitOfWork.Advertisements.GetAllAsync()).First().Id;
                var newCampaignAdvertisements = new Faker<CampaignAdvertisement>()
                    .RuleFor(c => c.AdvertisementId, advertisementId)
                    .RuleFor(c => c.AdCampaignId, adCampaignId)
                    .RuleFor(c => c.Views, f => f.Random.Int(1000, 10000))
                    .RuleFor(c => c.DisplayedTimes, f => f.Random.Int(2, 20))
                    .Generate(5).ToList();
                await _unitOfWork.CampaignAdvertisements.AddManyAsync(newCampaignAdvertisements);
                await _context.SaveChangesAsync();
            }*/
        }
    }
}
