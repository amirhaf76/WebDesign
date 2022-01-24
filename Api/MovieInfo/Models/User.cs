namespace MovieInfo.Models
{
    public class User
    {
        private readonly int _id;
        private int _rule;
        private readonly string _username;
        private string _password;

        public int Id => _id;
        public int Rule { get => _rule; set => _rule = value; }
        public string UserName => _username;
        public string Password { get => _password; set => _password = value; }
        
        public User(int id, int rule, string username, string password)
        {
            _id = id;
            _rule = rule;
            _username = username;
            _password = password;
        }
    }
}
