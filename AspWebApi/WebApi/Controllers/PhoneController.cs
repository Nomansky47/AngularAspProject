using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers;

[ApiController]
[Route("phone")]
public class PhoneController:Controller
{
    private Repository<Phone> _repository;
    public PhoneController(Context context)
    {
        _repository=new Repository<Phone>(context);
    }

    [HttpGet("getall")] 
    public ActionResult<IEnumerable<Phone>> GetAll()
    {
        return Ok(_repository.GetAll());
    }
    
    [HttpGet("get/{id}")] 
    public ActionResult<IEnumerable<Phone>> Get(int id)
    {
        return Ok(_repository.GetId(id));
    }

    [HttpPost("add")]
    public async Task<ActionResult> Add(Phone phone)
    {
        await _repository.Add(phone);
        return Ok();
    }
    
}