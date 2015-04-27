package upm.miw.pfm.models.daos.hibernate;

import upm.miw.pfm.models.daos.ProjectScheduleDao;
import upm.miw.pfm.models.entities.ProjectSchedule;

public class ProjectScheduleDaoHibernate extends GenericDaoHibernate<ProjectSchedule, Integer> implements ProjectScheduleDao  {

	public ProjectScheduleDaoHibernate() {
		super(ProjectSchedule.class);
	}
}
