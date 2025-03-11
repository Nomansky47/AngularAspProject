namespace WebApi.Interfaces;


    public interface IRepoBase<T> where T : class
    {
        Task Add(T objModel);
        Task AddRange(IEnumerable<T> objModel);
        Task<T?> GetId(int id);
        Task<T?> Get(Func<T, bool> predicate);
        Task<List<T>> GetAll();
        Task<List<T>> GetAll(Func<T, bool> predicate);
        Task Remove(T objModel);
        void Dispose();
    }
