package com.cse416.server.geojson.current_district_plans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class CurrentDistrictPlanService {
	@Autowired 
	private CurrentDistrictPlanRepository currentDistrictPlanRepository;
	
	@Cacheable(value = "current_district_plan", key="#name")
	public FeatureCollection getStateByName(String name) {
		return currentDistrictPlanRepository.findByName(name);
	}
}
