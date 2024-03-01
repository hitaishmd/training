using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Services;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController:ControllerBase
    {
        private readonly IRepository repository;
        private readonly ILogger logger;
        private InMemoryRepository inMemoryRepository;

        public GenresController(IRepository repository,ILogger<GenresController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet]//api/genres
        [HttpGet("list")]//api/genres/list
        [HttpGet("/allgenres")]//allgenres
        //[ResponseCache(Duration =60)]
        //[Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        [ServiceFilter(typeof(MyActionFilter))]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("Getting all the genres");

            return await repository.GetAllGenres();
        }

        [HttpGet("{Id:int}",Name ="getGenre")] //api /genres/example
        public ActionResult<Genre> Get(int Id)
        {
            logger.LogDebug("get by Id method executing...");
            var genre = repository.GetGenreById(Id);

            if (genre == null)
            {
                logger.LogWarning($"Genre with Id {Id} not found");
                return NotFound();
 //             throw new ApplicationException();
            }

            return genre;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            repository.AddGenre(genre);
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            
            return NoContent();
        }

        [HttpDelete] 
        public ActionResult Delete( Genre genre) 
        {
           
            return NoContent();
        }


    }
}
