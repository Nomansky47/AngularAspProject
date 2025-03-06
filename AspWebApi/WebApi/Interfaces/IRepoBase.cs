namespace WebApi.Interfaces;


    public interface IRepoBase<T> where T : class
    {
        Task Add(T objModel);
        Task AddRange(IEnumerable<T> objModel);
        T? GetId(int id);
        Task<T?> GetIdAsync(int id);
        IEnumerable<T> GetAll();
        Task<IEnumerable<T>> GetAllAsync();
        Task Remove(T objModel);
        void Dispose();
    }
