using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers;

[ApiController]
[Route("phoneinfo")]
public class PhoneInfoController:Controller
{
    private readonly Repository<PhoneInfo> _repository;
    private readonly Repository<Phone> _phoneRepository;
    public PhoneInfoController(Context context)
    {
        _repository = new Repository<PhoneInfo>(context);
        _phoneRepository = new Repository<Phone>(context);
    }
    
    [HttpGet("get/{id}")]
    public async Task<ActionResult<PhoneInfo>> Get(int id)
    {
        var phone = await _phoneRepository.GetId(id);
        var phoneInfo=await _repository.GetId(phone.InfoId);
        if (phoneInfo != null)
        {
            return Ok(phoneInfo);
        }
        else return NotFound();
        
    }
    
    
}