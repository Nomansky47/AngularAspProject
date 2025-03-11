using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Model;

public class User
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Login { get; set; }
    [Required]
    public string Password { get; set; }
    [JsonIgnore]
    public virtual ICollection<UserPhone> UserPhone { get; set; }
}