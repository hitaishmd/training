using Microsoft.AspNetCore.Authentication.JwtBearer;
using MoviesAPI.Filters;
using MoviesAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options =>
{
    options.Filters.Add(typeof(MyExceptionFilter));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddSingleton<IRepository, InMemoryRepository>();

builder.Services.AddResponseCaching();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddTransient<MyActionFilter>(); 


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.Use(async (context, next) =>
{
    using (var swapStream = new MemoryStream())
    {
        var originalResponseBody = context.Response.Body;
        context.Response.Body = swapStream;

        await next.Invoke();
        swapStream.Seek(0, SeekOrigin.Begin);
        string responseBody = new StreamReader(swapStream).ReadToEnd();
        swapStream.Seek(0, SeekOrigin.Begin);

        await swapStream.CopyToAsync(originalResponseBody);
        context.Response.Body = originalResponseBody;
        app.Logger.LogInformation(responseBody);
    }
});


app.Map(("/map"), (app) =>
    {
        app.Run(async context =>
        {
            await context.Response.WriteAsync("Im short circuting the pipeline");
        });
    });

app.UseHttpsRedirection();

app.UseResponseCaching();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
