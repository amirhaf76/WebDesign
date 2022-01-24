
namespace MovieInfo.Models
{
    public class Movie
    {
        private readonly int _id;
        private double _rate = 0d;
        private readonly List<UserComment> _comments = new();

        public Movie(int id, string name)
        {
            _id = id;
            Name = name;
        }

        public int Id => _id;
        public string Name { get; set; }
        public string Description { get; set; } = "";
        public double Rate => _rate;
        public IEnumerable<UserComment> Comment => _comments;

        public void UpdateRate(int newRate)
        {
            if (newRate >= 0 && newRate <= 1) _rate = newRate;
            else throw new ArgumentOutOfRangeException(nameof(newRate),
                $"{nameof(newRate)} must be between 0 and 1!");
        }
    }
}
