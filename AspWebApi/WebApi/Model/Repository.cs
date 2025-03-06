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

    public T? GetId(int id)
    {
        return _context.Set<T>().Find(id);
    }

    public async Task<T?> GetIdAsync(int id)
    {
        return await _context.Set<T>().FindAsync(id);
    }

    public IEnumerable<T> GetAll()
    {
        return _context.Set<T>().ToList();
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await Task.Run(() => _context.Set<T>());
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