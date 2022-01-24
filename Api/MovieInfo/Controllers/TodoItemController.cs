using Microsoft.AspNetCore.Mvc;
using MovieInfo.Models;

namespace MovieInfo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController: ControllerBase
    {
        [HttpGet(Name = "GetUser")]
        public User Get()
        {
            User user = new User(232, 2, "ali", "ds");
            using (var context = new MovieKadeContext())
            {
                context.Users.Add(user);
            }
            return user;
        }
    }
}
