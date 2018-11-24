package com.app.model.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class Login {

	@ApiModelProperty(example = "alaa", required = true)
	private String username = "";

	@ApiModelProperty(example = "alaa", required = true)
	private String password = "";

}
