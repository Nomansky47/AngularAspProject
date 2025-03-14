﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApi.Model;

public class Phone
{
    [Key]
    public int Id { get; set; }
    [Required]
    public int InfoId { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string CompanyName { get; set; }
    [Required]
    public string ImageLink { get; set; } 
    [ForeignKey("InfoId")]
    public virtual PhoneInfo PhoneInfo { get; set; }
    [JsonIgnore]
    public virtual ICollection<UserPhone> UserPhone { get; set; }
}