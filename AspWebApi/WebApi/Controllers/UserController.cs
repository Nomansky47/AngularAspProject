using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers;

[ApiController]
[Route("user")]
public class UserController:Controller
{
    private readonly Repository<User> _repository;

    public UserController(Context context)
    {
        _repository = new Repository<User>(context);
    }

    [HttpGet("get/{login}/{password}")]
    public ActionResult<User> GetUserId(string login,string password)
    {
        var user=_repository.GetAll().FirstOrDefault(p=>p.Login == login && p.Password == password);
        if (user != null)
            return Ok(user);
        else return NotFound();
    }
    
    [HttpPost("add")]
    public async Task<ActionResult> Add( [FromBody] UserPost userPost)
    {
        if ((await _repository.GetAllAsync()).FirstOrDefault(p => p.Login == userPost.login) == null)
        {
            var user = new User();
            user.Login = userPost.login;
            user.Password = userPost.password;
            await _repository.Add(user);
            return Ok();
        } 
        else return BadRequest();
    }
    
}