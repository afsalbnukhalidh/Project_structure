

using E_MAHAL_API.Data;
using E_MAHAL_API.Interfaces;
using E_MAHAL_API.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<EMahalDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("EMahalConnectionString")));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IHome, HomeRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyAllowSpecificOrigins", builder =>
    {
        builder.WithOrigins("https://localhost:7013") 
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("MyAllowSpecificOrigins");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
