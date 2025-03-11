using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers;

[ApiController]
[Route("phone")]
public class PhoneController:Controller
{
    private Repository<Phone> _repository;
    private Repository<UserPhone> _repositoryUserPhone;
    public PhoneController(Context context)
    {
        _repository=new Repository<Phone>(context);
        _repositoryUserPhone=new Repository<UserPhone>(context);
    }

    [HttpGet("getall")] 
    public async Task<ActionResult<IEnumerable<Phone>>> GetAll()
    {
        var list=await _repository.GetAll();
        if (list.Count > 0)
            return Ok(list);
        else return NoContent();
    }
    
    [HttpGet("get/{id}")] 
    public async  Task<ActionResult<Phone>> Get(int id)
    {
        var phone=await _repository.GetId(id);
        if (phone != null)
            return Ok(phone);
        else return NotFound();
    }
    
    //userphone
    [HttpGet("favorites/{userid}")] 
    public async Task<ActionResult<IEnumerable<Phone>>> GetFavorites(int userid)
    {
        var favorites=(await _repositoryUserPhone.GetAll(p => p.UserId == userid));
        if (favorites.Count > 0)
        {
            var result = new List<Phone>();
            foreach (var obj in favorites)
            {
                result.Add(await _repository.GetId(obj.PhoneId));
            }

            return Ok(result);
        } else return NotFound();
    }

    [HttpPost("addfavorites")]
    public async Task<ActionResult> AddFavorites([FromBody] UserPhonePost userphone)
    {
        if (await _repositoryUserPhone.Get(p => p.UserId == userphone.UserId && p.PhoneId == userphone.PhoneId) == null)
        {
            var obj = new UserPhone();
            obj.UserId = userphone.UserId;
            obj.PhoneId = userphone.PhoneId;
            await _repositoryUserPhone.Add(obj);
            return Ok();
        }
        else
        {
            return BadRequest();
            
        }
    }
    
    
}