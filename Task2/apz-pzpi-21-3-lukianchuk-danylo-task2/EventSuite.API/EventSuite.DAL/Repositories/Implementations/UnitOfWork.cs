using Microsoft.EntityFrameworkCore;
using EventSuite.Core.Models;
using EventSuite.DAL.Data;
using EventSuite.DAL.Repositories.Interfaces;

namespace EventSuite.DAL.Repositories.Implementations
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        private readonly IGenericRepository<Event> _eventRepository;
        private readonly IGenericRepository<EventResource> _eventResourceRepository;
        private readonly IGenericRepository<Mall> _mallRepository;
        private readonly IGenericRepository<Location> _locationRepository;
        private readonly IGenericRepository<Registration> _registrationRepository;
        private readonly IGenericRepository<Reservation> _reservationRepository;
        private readonly IGenericRepository<Resource> _resourceRepository;
        private readonly IGenericRepository<Ticket> _ticketRepository;
        private readonly IGenericRepository<Venue> _venueRepository;
        private readonly IGenericRepository<SmartBracelet> _smartBraceletRepository;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            _eventRepository = new GenericRepository<Event>(_context);
            _eventResourceRepository = new GenericRepository<EventResource>(_context);
            _mallRepository = new GenericRepository<Mall>(_context);
            _locationRepository = new GenericRepository<Location>(_context);
            _registrationRepository = new GenericRepository<Registration>(_context);
            _reservationRepository = new GenericRepository<Reservation>(_context);
            _resourceRepository = new GenericRepository<Resource>(_context);
            _ticketRepository = new GenericRepository<Ticket>(_context);
            _venueRepository = new GenericRepository<Venue>(_context);
            _smartBraceletRepository = new GenericRepository<SmartBracelet>(_context);
        }

        public IGenericRepository<Event> Events => _eventRepository;

        public IGenericRepository<EventResource> EventResources => _eventResourceRepository;

        public IGenericRepository<Mall> Malls => _mallRepository;

        public IGenericRepository<Location> Locations => _locationRepository;

        public IGenericRepository<Registration> Registrations => _registrationRepository;

        public IGenericRepository<Reservation> Reservations => _reservationRepository;

        public IGenericRepository<Resource> Resources => _resourceRepository;

        public IGenericRepository<Ticket> Tickets => _ticketRepository;

        public IGenericRepository<Venue> Venues => _venueRepository;

        public IGenericRepository<SmartBracelet> SmartBracelets => _smartBraceletRepository;

        public async Task CreateDatabaseBackupAsync(string path, string database) 
        {
            await _context.Database.ExecuteSqlRawAsync($"BACKUP DATABASE {database} TO DISK = '{path}'");
        }
    }
}
