namespace EventSuite.DAL.Data
{
    public interface ISeeder
    {
        Task EnsureSeedDataAsync(IServiceProvider serviceProvider);
    }
}
