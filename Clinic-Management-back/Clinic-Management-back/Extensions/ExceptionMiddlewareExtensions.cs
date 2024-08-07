﻿using Exceptions;
using IRepository;
using LoggerService;
using Microsoft.AspNetCore.Diagnostics;
using Shared.ResponseFeatures;
using System.Net;
using System.Text.Json;

namespace Clinic_Management_back.Extensions
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureExceptionHandler(this WebApplication app,
       ILoggerManager logger)
        {
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = "application/json";
                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        context.Response.StatusCode = contextFeature.Error switch
                        {
                            NotFoundException => StatusCodes.Status404NotFound,
                            BadRequestException => StatusCodes.Status400BadRequest,
                            _ => StatusCodes.Status500InternalServerError
                        };
                        logger.LogError($"Something went wrong: {contextFeature.Error}");
                        await context.Response.WriteAsync(JsonSerializer.Serialize(new BaseResponse()
                        {
                            Result = false,
                            StatusCode = context.Response.StatusCode,
                            Message = contextFeature.Error.Message,
                        })); ;
                    }
                });
            });
        }
    }
}
