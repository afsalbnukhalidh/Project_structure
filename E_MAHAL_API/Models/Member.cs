using System.ComponentModel.DataAnnotations;

namespace E_MAHAL_API.Models
{
    public class Member
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string HomeNumber { get; set; }
        public string Contact { get; set; }
    }
}
