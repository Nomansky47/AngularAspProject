using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers;

[ApiController]
[Route("userphone")]
public class UserPhoneController:Controller
{
    private readonly Repository<UserPhone> _repository;

    public UserPhoneController(Context  context)
    {
        _repository=new Repository<UserPhone>(context);
    }

    [HttpGet("get/{id}")]
    public async Task<ActionResult<List<UserPhone>>> GetUserId(int id)
    {
        var userPhones = (await _repository.GetAllAsync()).Where(p => p.Id == id).ToList();
        if (userPhones.Count > 0)
        {
            return Ok(userPhones);
        } else return NotFound();
    }

    [HttpPost("add")]
    public async Task<ActionResult> Add([FromBody] UserPhonePost userPhone)
    {
        if ((await _repository.GetAllAsync()).FirstOrDefault(p =>
                p.UserId == userPhone.UserId && p.PhoneId == userPhone.PhoneId) != null)
        {
            return BadRequest();
        }
        else
        {
            var obj = new UserPhone();
            obj.UserId=userPhone.UserId;
            obj.PhoneId=userPhone.PhoneId;
            await _repository.Add(obj);
            return Ok();
        }
    }
    
}