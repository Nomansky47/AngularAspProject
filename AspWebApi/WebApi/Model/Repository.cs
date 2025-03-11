using WebApi.Interfaces;

namespace WebApi.Model;
using System.Data;

public class Repository<T> : IRepoBase<T> where T : class
{

    protected readonly Context _context;

    public Repository(Context context)
    {
        _context=context;
    }

    public async Task Add(T model)
    {
        _context.Set<T>().Add(model);
        await _context.SaveChangesAsync();
    }

    public async  Task AddRange(IEnumerable<T> model)
    {
        _context.Set<T>().AddRange(model);
        await _context.SaveChangesAsync();
    }

    public async Task<T?> Get(Func<T,bool> predicate)
    {
        return _context.Set<T>().FirstOrDefault(predicate);
    }

    public async Task<T?> GetId(int id)
    {
        return await _context.Set<T>().FindAsync(id);
    }

    public async Task<List<T>> GetAll()
    {
        return await Task.Run(() => _context.Set<T>().ToList());
    }
    public async Task<List<T>> GetAll(Func<T,bool> predicate)
    {
        return await Task.Run(() => _context.Set<T>().Where(predicate).ToList());
    }


    public async Task Remove(T objModel)
    {
        _context.Set<T>().Remove(objModel);
        await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}