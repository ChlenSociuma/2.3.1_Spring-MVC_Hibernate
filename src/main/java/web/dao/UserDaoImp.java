package web.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import web.model.User;

import java.util.List;

@Repository
public class UserDaoImp implements UserDao {

    private EntityManager entityManager;

    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void save(User user) {
        entityManager.persist(user);
    }

    @Override
    public void update(User user) {
        User updatingUser = entityManager.find(User.class, user.getId());
        if (updatingUser != null) {
            updatingUser.setFirstName(user.getFirstName());
            updatingUser.setLastName(user.getLastName());
            updatingUser.setAge(user.getAge());
            entityManager.merge(updatingUser);
        }
    }

    @Override
    public void deleteById(Long userId) {
        User user = entityManager.find(User.class, userId);
        if (user != null) {
            entityManager.remove(user);
        }
    }

    @Override
    public List<User> findAll() {
        return entityManager.createQuery("from User", User.class).getResultList();
    }
}
