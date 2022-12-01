package com.login.app.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.login.app.models.CRole;
import com.login.app.models.Role;
//import com.login.app.models.ERole;
//import com.login.app.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	
	//@Transactional
	//@Modifying
	//@Query(value = "UPDATE customer_request SET comments = :comments , status = :status WHERE id = :id",nativeQuery = true)
	//String updateCommentsByPendingStatus(String comments, String status, Integer id);
	
	
	 //@Modifying
	// @Query(value = "insert into commit_activity_link (commit_id, activity_id) VALUES (?1, ?2)", nativeQuery = true)
//	    @Query(value="insert into roles (id,name) values (?1, ?2)", nativeQuery = true)
//	    public int modifyingQueryInsertPerson(@Param("id")Long id, @Param("name")String name, @Param("age")Integer age);
//	
	Optional<Role> findByName(CRole name);
	//Optional<Role> findByCount();
//	@Transactional
//	@Modifying
//	@Query(value = "select count(datas.id) from roles datas",nativeQuery = true)
//	List<Role> findByCount();
	
}
