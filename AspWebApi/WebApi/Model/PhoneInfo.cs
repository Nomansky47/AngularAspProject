using System.ComponentModel.DataAnnotations;

namespace WebApi.Model;

public class PhoneInfo
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    public string Country { get; set; }
    [Required]
    public int ResolutionX { get; set; }
    [Required]
    public int ResolutionY { get; set; }
    [Required]
    public string OS { get; set; }
    [Required]
    public string ImageLink { get; set; }
    
    public virtual ICollection<Phone> Phone { get; set; }
}