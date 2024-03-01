using Microsoft.AspNetCore.Mvc.Filters;

namespace MoviesAPI.Filters
{
    public class MyActionFilter : IActionFilter
    {
        private readonly ILogger<MyActionFilter> logger;
        public MyActionFilter(ILogger<MyActionFilter> logger)
        {
            this.logger = logger;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogWarning("OnAction executing");
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogWarning("OnAction executed");
        }
    }
}
