using System.Data.Entity;

namespace MovieInfo.Models
{
    public class MovieKadeContext: DbContext
    {

        public DbSet<Movie> Movies { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserComment> UserComments { get; set; }
        public DbSet<Vote> Votes { get; set; }

    }
}
