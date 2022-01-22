using Microsoft.AspNetCore.Mvc;
using MovieInfo.Models;

namespace MovieInfo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoItemController : ControllerBase
    {
        private readonly ILogger<TodoItemController> _logger;

        public TodoItemController(ILogger<TodoItemController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "TodoItem")]
        public TodoItem Get()
        {
            return new TodoItem();
        }
    }
}
