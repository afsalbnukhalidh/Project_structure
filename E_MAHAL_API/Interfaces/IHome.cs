using E_MAHAL_API.DTO;
using E_MAHAL_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace E_MAHAL_API.Interfaces
{
    public interface IHome
    {
        Task<ResponseDto> AddMembers(MemberRequest member);
        MemberRequestList GetTableValues(int PageNumber,int skip);
    }
}
