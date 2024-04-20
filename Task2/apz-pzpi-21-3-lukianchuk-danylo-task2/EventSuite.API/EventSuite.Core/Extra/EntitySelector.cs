using EventSuite.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EventSuite.Core.Extra
{
    public static class EntitySelector
    {
        public static Expression<Func<Event, Event>> EventSelector => q => new Event
        {
            Id = q.Id,
            Name = q.Name,
            Description = q.Description,
            PaidEntrance = q.PaidEntrance,
            StartDate = q.StartDate,
            EndDate = q.EndDate,
            User = q.User,
            Reservations = q.Reservations.Select(reservation => new Reservation
            {
                Id = reservation.Id,
                Description = reservation.Description,
                VenueId = reservation.VenueId
            }).ToList(),
            Registrations = q.Registrations.Select(registration => new Registration 
            { 
                Id = registration.Id,
                EventId = registration.EventId,
                DateCreated = registration.DateCreated
            }).ToList(),
            EventResources = q.EventResources.Select(eventResource => new EventResource
            { 
                Id = eventResource.Id,
                Amount = eventResource.Amount,
                EventId = eventResource.EventId,
                ResourceId = eventResource.ResourceId
            }).ToList(),
            DateCreated = q.DateCreated,
            DateUpdated = q.DateUpdated
        };

        public static Expression<Func<Location, Location>> LocationSelector => q => new Location
        {
            Id = q.Id,
            Country = q.Country,
            City = q.City,
            Street = q.Street,
            StreetType = q.StreetType,
            BuildingNumber = q.BuildingNumber,
            Malls = q.Malls.Select(panel => new Mall
            {
                Id = panel.Id,
                Name = panel.Name,
                Square = panel.Square,
                LocationId = panel.LocationId
            }).ToList()
        };

        public static Expression<Func<Reservation, Reservation>> ReservationSelector => q => new Reservation
        {
            Id = q.Id,
            Description = q.Description,
            Event = q.Event,
            Venue = q.Venue
        };

        public static Expression<Func<Mall, Mall>> MallSelector => q => new Mall 
        { 
            Id = q.Id,
            Name = q.Name,
            Square = q.Square,
            Location = q.Location,
            Venues = q.Venues.Select(venue => new Venue 
            {
                Id = venue.Id,
                Type = venue.Type,
                Description = venue.Description,
                MaxSize = venue.MaxSize,
                Services = venue.Services,
                RoomNumber = venue.RoomNumber,
                Floor = venue.Floor,
                Square = venue.Square
            }).ToList()
        };

        public static Expression<Func<Resource, Resource>> ResourceSelector => q => new Resource
        {
            Id = q.Id,
            Name = q.Name,
            Description = q.Description,
            Type = q.Type,
            Price = q.Price,
            EventResources = q.EventResources.Select(eventResource => new EventResource
            {
                Id = eventResource.Id,
                Amount = eventResource.Amount,
                EventId = eventResource.EventId
            }).ToList()
        };

        public static Expression<Func<Registration, Registration>> RegistrationSelector => q => new Registration
        {
            Id = q.Id,
            Event = q.Event,
            User = q.User,
            DateCreated = q.DateCreated,
            Tickets = q.Tickets.Select(ticket => new Ticket
            {
                Id = ticket.Id,
                Type = ticket.Type,
                Price = ticket.Price,
            }).ToList()
        };

        public static Expression<Func<Ticket, Ticket>> TicketSelector => q => new Ticket
        {
            Id = q.Id,
            Price = q.Price,
            Type = q.Type,
            Registration = q.Registration
        };

        public static Expression<Func<Venue, Venue>> VenueSelector => q => new Venue
        {
            Id = q.Id,
            Description = q.Description,
            Square = q.Square,
            MaxSize = q.MaxSize,
            Services = q.Services,
            RoomNumber = q.RoomNumber,
            Floor = q.Floor,
            Mall = q.Mall,
            Reservations = q.Reservations.Select(reservation => new Reservation 
            {
                Id = reservation.Id,
                Description = reservation.Description,
                EventId = reservation.EventId,
            }).ToList()
        };

        public static Expression<Func<EventResource, EventResource>> EventResourceSelector => q => new EventResource
        {
            Id = q.Id,
            Amount = q.Amount,
            Event = q.Event,
            Resource = q.Resource
        };
    }
}
