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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<User>()
                .HasMany(a => a.Events)
                .WithOne(q => q.User)
                .HasForeignKey(q => q.UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.Entity<User>()
                .HasMany(a => a.Registrations)
                .WithOne(q => q.User)
                .HasForeignKey(q => q.UserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.Entity<Event>()
                .HasMany(a => a.Registrations)
                .WithOne(q => q.Event)
                .HasForeignKey(q => q.EventId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.Entity<Event>()
                .HasMany(a => a.Reservations)
                .WithOne(q => q.Event)
                .HasForeignKey(q => q.EventId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Event>()
                .HasMany(a => a.EventResources)
                .WithOne(q => q.Event)
                .HasForeignKey(q => q.EventId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Resource>()
                .HasMany(a => a.EventResources)
                .WithOne(q => q.Resource)
                .HasForeignKey(q => q.ResourceId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Venue>()
                .HasMany(a => a.Reservations)
                .WithOne(q => q.Venue)
                .HasForeignKey(q => q.VenueId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Registration>()
                .HasMany(a => a.Tickets)
                .WithOne(q => q.Registration)
                .HasForeignKey(q => q.RegistrationId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.Entity<Mall>()
                .HasMany(a => a.Venues)
                .WithOne(q => q.Mall)
                .HasForeignKey(q => q.MallId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.Entity<Location>()
                .HasMany(a => a.Malls)
                .WithOne(q => q.Location)
                .HasForeignKey(q => q.LocationId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
