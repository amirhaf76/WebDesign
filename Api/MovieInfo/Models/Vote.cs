namespace MovieInfo.Models
{
    public class Vote
    {
        private readonly int _id;
        private readonly User _user;
        private double _rating;
        private int _movieId;

        public Vote(int id, User user, double rating, int movieId)
        {
            _id = id;
            _user = user;
            _rating = rating;
            _movieId = movieId;
        }

        public int Id => _id;
        public User User => _user;
        public double Rating { get => _rating; set => _rating = value; }
        public int MovieId { get => _movieId; set => _movieId = value; }

    }
}
