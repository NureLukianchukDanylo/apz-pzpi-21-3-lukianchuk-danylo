using EventSuite.Core.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.DAL.Data
{
    public class ApplicationDbContext: IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            ChangeTracker.LazyLoadingEnabled = true;
        }

        public DbSet<Event> Events { get; set; }

        public DbSet<Reservation> Reservations { get; set; }

        public DbSet<EventResource> EventResources { get; set; }

        public DbSet<Resource> Resources { get; set; }

        public DbSet<Venue> Venues { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Registration> Registrations { get; set; }

        public DbSet<Ticket> Tickets { get; set; }

        public DbSet<Location> Locations { get; set; }

        public DbSet<Mall> Malls { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            dbContextOptionsBuilder.UseLazyLoadingProxies();
        }
    }
}
