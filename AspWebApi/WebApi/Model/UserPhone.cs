using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Model;

public class UserPhone
{
    [Key]
    public int Id { get; set; }
    [Required]
    public int UserId { get; set; }
    [Required]
    public int PhoneId { get; set; }
    [ForeignKey("UserId")]
    public virtual User User { get; set; }
    [ForeignKey("PhoneId")]
    public virtual Phone Phone { get; set; }
}