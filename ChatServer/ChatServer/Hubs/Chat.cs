using ChatServer.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatServer.Hubs
{
    public class Chat : Hub
    {
        public static IList<MessageHub>? Messages;

        public Chat()
        {
            if (Messages is null)
                Messages = new List<MessageHub>();
        }

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("SendMessage", user, message);
            Messages.Add(new MessageHub()
            {
                User = user,
                Message = message
            });
        }

        public async Task NewUser(string user, string connectionId) 
        {
            await Clients.Client(connectionId).SendAsync("PreviousMessages", Messages);
            await Clients.All.SendAsync("NewUser", user);
        }
    }
}