using ChatServer.Hubs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(x => x.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod().AllowCredentials());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapHub<Chat>("/chat");

app.Run();