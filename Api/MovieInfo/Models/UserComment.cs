namespace MovieInfo.Models
{
    public class UserComment
    {
        private readonly int _id;
        private readonly User _user;
        private string _comment;
        private bool _approved;
        private DateTime _dateTime;
        private int _movieId;

        public UserComment(
            int id,
            User user,
            string comment,
            bool approved,
            DateTime dateTime,
            int movieId)
        {
            _id = id;
            _user = user;
            _comment = comment;
            _approved = approved;
            _dateTime = dateTime;
            _movieId = movieId;
        }

        public int Id => _id; 
        public User User => _user;
        public string Comment { get => _comment; set => _comment = value; }
        public bool Approved { get => _approved; set => _approved = value; }
        public DateTime DateTime { get => _dateTime; set => _dateTime = value;}
        public int MovieId { get => _movieId; set => _movieId = value;}
    }
}
