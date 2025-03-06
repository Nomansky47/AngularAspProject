using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Model;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<Context>(
    opt =>
    {
        opt.UseNpgsql(builder.Configuration.GetConnectionString("Database"));
    }
);
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(b=>b.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.MapControllers();
app.UseHttpsRedirection();
app.UseRouting();
DbInitializer.CreateDb(app);
app.Run();
