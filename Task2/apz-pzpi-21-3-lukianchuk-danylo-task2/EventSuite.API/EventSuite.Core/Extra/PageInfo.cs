namespace EventSuite.Core.Extra
{
    public class PageInfo
    {
        public PageInfo()
        {
        }
        public int Size { get; set; }
        public int Number { get; set; }
        public PageInfo(int size, int number)
        {
            Size = size;
            Number = number;
        }
    }
}
