package web.dao;


import web.model.User;

import java.util.List;

public interface UserDao {
    public void save(User user);
    public void update(User user);
    public void deleteById(Long userId);
    public List<User> findAll();
}
