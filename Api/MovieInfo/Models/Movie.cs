
namespace MovieInfo.Models
{
    public class Movie
    {
        private readonly int _id;
        private double _rate = 0d;
        private List<UserComment> _comments = new List<UserComment>();

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
    }
}
