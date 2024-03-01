using MoviesAPI.Entities;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Validations
{
    public class FirstLetterUppercaseAttribute:ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if(value == null || string.IsNullOrEmpty(value.ToString())){

                return ValidationResult.Success;
                }

            var FirstLetter = value.ToString()[0].ToString();

            if (FirstLetter != FirstLetter.ToUpper())
            {
                return new ValidationResult("First letter must be uppercase");
            }

            return ValidationResult.Success;

            return base.IsValid(value, validationContext);
        }

    }
}
