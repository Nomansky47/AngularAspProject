using Microsoft.EntityFrameworkCore;

namespace WebApi.Model;

public class Context:DbContext
{
    public Context(DbContextOptions<Context> options)
        : base(options)
    {
    }
    public virtual DbSet<Phone> Phone { get; set; }
    public virtual DbSet<PhoneInfo> PhoneInfo { get; set; }
    public virtual DbSet<User> User { get; set; }
    public virtual DbSet<UserPhones> UserPHones { get; set; }
}