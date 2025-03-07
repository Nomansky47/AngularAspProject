using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers;

[ApiController]
[Route("phoneinfo")]
public class PhoneInfoController:Controller
{
    private readonly Repository<PhoneInfo> _repository;
    public PhoneInfoController(Context context)
    {
        _repository = new Repository<PhoneInfo>(context);
    }
    
    [HttpGet("get/{id}")]
    public ActionResult<PhoneInfo> Get(int id)
    {
        return Ok(_repository.GetId(id));
    }
    
    
}