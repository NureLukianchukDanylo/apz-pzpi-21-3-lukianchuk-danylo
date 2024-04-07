using EventSuite.Core.Models;
using EventSuite.DAL.Repositories.Implementations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.DAL.Repositories.Interfaces
{
    public interface IUnitOfWork
    {
        IGenericRepository<Event> Events { get; }

        IGenericRepository<EventResource> EventResources { get; }

        IGenericRepository<Mall> Malls { get; }

        IGenericRepository<Location> Locations { get; }

        IGenericRepository<Registration> Registrations { get; }

        IGenericRepository<Reservation> Reservations { get; }

        IGenericRepository<Resource> Resources { get; }

        IGenericRepository<Ticket> Tickets { get; }

        IGenericRepository<Venue> Venues { get; }

        Task CreateDatabaseBackupAsync(string path, string database);
    }
}
