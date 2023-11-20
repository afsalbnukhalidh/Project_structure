using E_MAHAL_API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace E_MAHAL_API.Data
{
    public class EMahalDbContext : IdentityDbContext
    {
        public EMahalDbContext(DbContextOptions<EMahalDbContext> options) : base(options)
        {
        }
        public DbSet<Member> Members { get; set; }
    }
}
