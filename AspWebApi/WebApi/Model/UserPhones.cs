using System.ComponentModel.DataAnnotations;

namespace WebApi.Model;

public class UserPhones
{
    [Key]
    public int Id { get; set; }
    [Required]
    public int UserId { get; set; }
    [Required]
    public int PhoneId { get; set; }
}