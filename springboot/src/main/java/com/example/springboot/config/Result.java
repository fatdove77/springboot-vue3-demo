package com.example.springboot.config;

import lombok.Data;

@Data
public class Result<T> {
    private String code;  //状态码
    private String msg; //返回信息
    private T data;     //返 回数据


    public Result(T data){
        this.data=data;
    }

    public Result() {

    }

    //    返回成功的信息
    public static Result success(){
        Result result=new Result<>();
        result.setCode("0");
        result.setMsg("成功");
        return result;
    }

    public static <T> Result<T> success(T data){
        Result<T> result =new Result<>(data);
        result.setCode("0");
        result.setMsg("成功");
        return result;
    }
    //    返回失败的信息
    public static Result error(String code, String msg){
        Result result=new Result<>();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }


}

