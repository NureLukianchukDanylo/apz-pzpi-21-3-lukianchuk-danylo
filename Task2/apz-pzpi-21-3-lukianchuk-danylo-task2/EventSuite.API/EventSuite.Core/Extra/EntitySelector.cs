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
            EventId = q.EventId,
            VenueId = q.VenueId
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
    }
}
